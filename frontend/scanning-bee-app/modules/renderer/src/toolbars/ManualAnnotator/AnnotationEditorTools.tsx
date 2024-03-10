import {
    Button, Divider, Icon, Menu, MenuItem, Popover, Slider,
} from '@blueprintjs/core';
import Annotation, { AnnotationProps } from '@frontend/models/annotation';
import CellType from '@frontend/models/cellType';
import {
    addAnnotation,
    mutateAnnotation,
    removeAnnotation,
} from '@frontend/slices/annotationSlice';
import { useTheme } from '@frontend/slices/themeSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const RadiusSlider = (props: {
    annotations: Annotation[],
}) => {
    const { annotations } = props;

    const [displayedRadius, setDisplayedRadius] = useState(annotations[0]?.radius || 86);

    const dispatch = useDispatch();

    const disabled = annotations.length !== 1;

    const theme = useTheme();

    return (
        <Popover
            interactionKind='click'
            position='left'
            disabled={disabled}
        >
            <Button
                icon={<Icon icon='circle' color={theme.secondaryForeground} />}
                minimal
                disabled={disabled}
            />
            <div style={{ padding: '10px', width: '200px' }}>
                <Slider
                    disabled={disabled}
                    min={0}
                    max={200}
                    stepSize={1}
                    labelStepSize={40}
                    onRelease={value => dispatch(mutateAnnotation({
                        id: annotations[0].id,
                        mutations: { radius: value },
                    }))}
                    value={displayedRadius}
                    onChange={value => setDisplayedRadius(value)}
                />
            </div>
        </Popover>
    );
};

const CellTypePicker = (props: {
    annotations: Annotation[],
}) => {
    const { annotations } = props;

    const dispatch = useDispatch();

    const allAnnotationsAreSameCellType = annotations.length !== 0
        && annotations.every(annotation => annotation.cell_type === annotations[0].cell_type);

    const disabled = annotations.length === 0;

    const theme = useTheme();

    return (
        <Popover
            interactionKind='click'
            position='left'
            disabled={disabled}
        >
            <Button
                icon={<Icon icon='tag' color={theme.secondaryForeground} />}
                minimal
                disabled={disabled}
            />
            <Menu>
                {Object.keys(CellType).map((cellType, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => annotations.forEach(annotation => dispatch(mutateAnnotation({
                            id: annotation.id,
                            mutations: { cell_type: CellType[cellType] },
                        })))}
                        active={allAnnotationsAreSameCellType && annotations[0].cell_type === CellType[cellType]}
                        disabled={disabled}
                        text={cellType}
                    />
                ))}
            </Menu>
        </Popover>
    );
};

const DeleteAnnotationButton = (props: {
    annotations: Annotation[],
}) => {
    const { annotations } = props;

    const dispatch = useDispatch();

    return (
        <Button
            icon={<Icon icon='trash' />}
            intent='danger'
            minimal
            onClick={() => annotations.forEach(annotation => dispatch(removeAnnotation(annotation.id)))}
            disabled={annotations.length === 0}
        />
    );
};

const CreateAnnotationButton = (props: { annotationProps: AnnotationProps }) => {
    const dispatch = useDispatch();

    return (
        <Button
            icon={<Icon icon='add' />}
            intent='success'
            minimal
            onClick={() => {
                const newAnnotation = new Annotation(props.annotationProps);
                dispatch(addAnnotation(Annotation.toPlainObject(newAnnotation)));
            }}
            disabled={!props.annotationProps}
        />
    );
};

const GridButton = (props: { onClick: () => void }) => (
    <Button
        icon={<Icon icon='grid' color={useTheme().secondaryForeground} />}
        minimal
        onClick={props.onClick}
    />
);

const EditorButtonPopover = (props: { children: any, disabled?: boolean }) => <Popover
    usePortal
    canEscapeKeyClose
    interactionKind='hover-target'
    hoverOpenDelay={0}
    hoverCloseDelay={0}
    disabled={props.disabled}
    position='left'
>
    {props.children}
</Popover>;

export const AnnotationEditorTools = (props: {
    annotations: Annotation[],
    newAnnotationProps: AnnotationProps,
    toggleGrid: () => void,
}) => {
    const { annotations, newAnnotationProps, toggleGrid } = props;

    const theme = useTheme();

    return (
        <div
            className='column-flex-center manual-annotator-toolbar'
            style={{
                backgroundColor: theme.secondaryBackground,
                color: theme.secondaryForeground,
            }}
        >
            <EditorButtonPopover>
                <CreateAnnotationButton annotationProps={newAnnotationProps} />
                <div style={{ padding: '10px' }}>Create Annotation</div>
            </EditorButtonPopover>

            <EditorButtonPopover disabled={annotations.length === 0}>
                <DeleteAnnotationButton annotations={annotations} />
                <div style={{ padding: '10px' }}>Delete</div>
            </EditorButtonPopover>

            <Divider style={{ width: '100%', backgroundColor: theme.secondaryForeground }} />

            <EditorButtonPopover disabled={annotations.length === 0}>
                <RadiusSlider annotations={annotations} />
                <div style={{ padding: '10px' }}>Set Radius</div>
            </EditorButtonPopover>

            <EditorButtonPopover disabled={annotations.length === 0}>
                <CellTypePicker annotations={annotations} />
                <div style={{ padding: '10px' }}>Set Cell Type</div>
            </EditorButtonPopover>

            <EditorButtonPopover>
                <GridButton onClick={toggleGrid} />
                <div style={{ padding: '10px' }}>Toggle Grid</div>
            </EditorButtonPopover>
        </div>
    );
};
