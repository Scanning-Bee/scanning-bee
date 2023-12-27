import { Button, Divider, Icon, Menu, MenuItem, Popover } from '@blueprintjs/core';
import { BackendInterface } from '@frontend/controllers/backendInterface/backendInterface';
import Annotation from '@frontend/models/annotation';
import CellType from '@frontend/models/cellType';
import {
    setActiveAnnotations,
    useActiveAnnotations,
    useAnnotations,
    useAnnotationsFolder,
    useImages,
} from '@frontend/slices/annotationSlice';
import { AnnotatedImage } from '@frontend/toolbars/AnnotatedImage';
import { AnnotationEditorTools } from '@frontend/toolbars/AnnotationEditorTools';
import { lightTheme } from '@frontend/utils/colours';
import { getFileName } from '@frontend/utils/fileNameUtils';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SplitPane from 'react-split-pane';

const SaveToDatabaseButton = (props: { annotations: Annotation[], shownImageUrl: string }) => (
    <Popover
        interactionKind='click'
        position='right'
        lazy
        canEscapeKeyClose
    >
        <Button
            text='Save annotations to database'
            intent='primary'
            icon='database'
            style={{ margin: '5px' }}
            className='inline-box-important'
        />
        <Menu>
            <MenuItem
                text={`Save annotations for ${getFileName(props.shownImageUrl)}`}
                onClick={() => {
                    const filteredAnnotations = props.annotations
                        .filter(annotation => annotation.source_name === getFileName(props.shownImageUrl));

                    BackendInterface.getInstance().saveAnnotationsToDatabase(filteredAnnotations);
                }}
                icon='media'
            />
            <MenuItem
                text='Save all annotations'
                onClick={() => {
                    BackendInterface.getInstance().saveAnnotationsToDatabase(props.annotations);
                }}
                icon='tick'
            />
        </Menu>
    </Popover>
);

export const ManualAnnotatorPage = () => {
    const dispatch = useDispatch();

    const [shownImageUrl, setShownImageUrl] = useState<string | undefined>(undefined);
    const [leftPanelOpen, setLeftPanelOpen] = useState<boolean>(true);

    const folder = useAnnotationsFolder();
    const activeAnnotations = useActiveAnnotations();
    const annotations = useAnnotations();
    const images = useImages();

    useEffect(() => {
        // if no image is shown or the image shown is not in the folder, set the shown image to the first image in the folder
        if (images.length > 0 && (!shownImageUrl || !images.includes(shownImageUrl))) {
            setShownImageUrl(images[0]);
        }
    }, [images, folder, shownImageUrl]);

    useEffect(() => {
        const panelElement = document.getElementById('left-panel');

        if (!panelElement) {
            return;
        }

        panelElement.style.width = leftPanelOpen ? '250px' : '0px';
    }, [leftPanelOpen]);

    if (!folder || !shownImageUrl) {
        return <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
                text='Open a folder'
                minimal
                large
                onClick={() => {
                    BackendInterface.getInstance().openFolderDialog();
                }}
                intent='success'
                icon='folder-new'
                style={{ padding: '5px', margin: '2px' }}
            />
            <p style={{ fontWeight: 'normal', fontSize: '16px' }} className='nomargin'>to start annotating or see your annotations.</p>
        </div>;
    }

    const annotatedImageNames = annotations.map(annotation => annotation.source_name);

    const sortedImages = [...images].sort((a, b) => {
        const imageNumberA = parseInt(a.split('.')[0].split('_')[1], 10);
        const imageNumberB = parseInt(b.split('.')[0].split('_')[1], 10);

        return imageNumberA - imageNumberB;
    });

    return (
        <div className='page'>
            <div id="left-panel" className='panel'>
                <Button
                    icon={<Icon icon={leftPanelOpen ? 'arrow-left' : 'arrow-right'} style={{ color: lightTheme.primaryForeground }} />}
                    className={`panel-button button-animation ${leftPanelOpen ? 'open-margin-left' : 'closed-margin-left'}`}
                    onClick={
                        (e) => {
                            // ? this section prevents button spamming with spacebar.
                            e.preventDefault();

                            setLeftPanelOpen(!leftPanelOpen);
                        }
                    }
                    style={{ background: lightTheme.secondaryBackground }}
                />

                {/* @ts-ignore */}
                <SplitPane
                    split="horizontal"
                    minSize={200}
                    defaultSize={'250px'}
                    maxSize={400}
                    style={{
                        backgroundColor: lightTheme.secondaryBackground,
                        opacity: leftPanelOpen ? 1 : 0,
                        width: !leftPanelOpen && '0px',
                        transition: 'opacity 0.1s',
                    }}
                    resizerStyle={{ backgroundColor: lightTheme.secondaryBackground, height: '1px' }}
                    allowResize={leftPanelOpen}
                    pane1Style={{ display: 'unset', width: '245px' }}
                    resizerClassName='resizer'
                >
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
                        <h2>Annotations</h2>
                        <Divider style={{ width: '240px' }}/>
                        <Button
                            text='Open a folder'
                            onClick={() => {
                                BackendInterface.getInstance().openFolderDialog();
                            }}
                            intent='primary'
                            icon='folder-new'
                            style={{ margin: '5px' }}
                            className='inline-box-important'
                        />
                        <Button
                            text='Save annotations locally'
                            onClick={() => {
                                BackendInterface.getInstance().saveAnnotations(annotations, folder);
                            }}
                            intent='primary'
                            icon='floppy-disk'
                            style={{ margin: '5px' }}
                            className='inline-box-important'
                        />
                        <SaveToDatabaseButton annotations={annotations} shownImageUrl={shownImageUrl} />
                        <Button
                            text='Generate annotations with AI'
                            onClick={() => {
                                BackendInterface.getInstance().generateAnnotationsByAI(getFileName(shownImageUrl));
                            }}
                            intent='primary'
                            icon='send-to-graph'
                            style={{ margin: '5px', backgroundColor: lightTheme.tertiaryAccent }}
                            className='inline-box-important'
                        />
                    </div>
                    <div className='annotated-images-panel'>
                        <h2 style={{ margin: '0 35px 10px ' }}>Images</h2>
                        <Divider style={{ width: '240px' }}/>
                        {sortedImages.map(image => (
                            <Button
                                key={image}
                                text={getFileName(image)}
                                minimal={image !== shownImageUrl}
                                onClick={() => {
                                    setShownImageUrl(image);
                                    dispatch(setActiveAnnotations([]));
                                }}
                                style={{ minWidth: 'fit-content', margin: '0 25px' }}
                                intent={image === shownImageUrl ? 'primary' : 'none'}
                                icon={annotatedImageNames.includes(getFileName(image)) ? 'annotation' : 'blank'}
                                rightIcon={image === shownImageUrl ? 'eye-open' : 'blank'}
                            />
                        ))}
                    </div>
                </SplitPane>
            </div>

            <div className='column-flex-center' style={{ width: '100vw' }}>
                <AnnotatedImage
                    shownImageUrl={images.find(image => image === shownImageUrl)}
                />
                <AnnotationEditorTools
                    annotations={activeAnnotations}
                    newAnnotationProps={{
                        center: [480, 270],
                        radius: 86,
                        cell_type: CellType.NOT_CLASSIFIED,
                        poses: [],
                        source_name: getFileName(shownImageUrl),
                        timestamp: 0,
                    }}
                />
            </div>
        </div>
    );
};
