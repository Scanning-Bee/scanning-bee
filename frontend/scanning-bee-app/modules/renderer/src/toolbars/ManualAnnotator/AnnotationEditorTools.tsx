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
    activeAnnotations: Annotation[],
}) => {
    const { activeAnnotations } = props;

    const [displayedRadius, setDisplayedRadius] = useState(activeAnnotations[0]?.radius || 86);

    const dispatch = useDispatch();

    const disabled = activeAnnotations.length !== 1;

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
                        id: activeAnnotations[0].id,
                        mutations: { radius: value },
                    }))}
                    value={displayedRadius}
                    initialValue={displayedRadius}
                    onChange={value => setDisplayedRadius(value)}
                />
            </div>
        </Popover>
    );
};

const CellTypePicker = (props: {
    activeAnnotations: Annotation[],
}) => {
    const { activeAnnotations } = props;

    const dispatch = useDispatch();

    const allAnnotationsAreSameCellType = activeAnnotations.length !== 0
        && activeAnnotations.every(annotation => annotation.cell_type === activeAnnotations[0].cell_type);

    const disabled = activeAnnotations.length === 0;

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
                        onClick={() => activeAnnotations.forEach(annotation => dispatch(mutateAnnotation({
                            id: annotation.id,
                            mutations: { cell_type: CellType[cellType] },
                        })))}
                        active={allAnnotationsAreSameCellType && activeAnnotations[0].cell_type === CellType[cellType]}
                        disabled={disabled}
                        text={cellType}
                    />
                ))}
            </Menu>
        </Popover>
    );
};

const DeleteAnnotationButton = (props: {
    activeAnnotations: Annotation[],
}) => {
    const { activeAnnotations } = props;

    const dispatch = useDispatch();

    return (
        <Button
            icon={<Icon icon='trash' />}
            intent='danger'
            minimal
            onClick={() => activeAnnotations.forEach(annotation => dispatch(removeAnnotation(annotation.id)))}
            disabled={activeAnnotations.length === 0}
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
    activeAnnotations: Annotation[],
    newAnnotationProps: AnnotationProps,
    toggleGrid: () => void,
}) => {
    const { activeAnnotations, newAnnotationProps, toggleGrid } = props;

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

            <EditorButtonPopover disabled={activeAnnotations.length === 0}>
                <DeleteAnnotationButton activeAnnotations={activeAnnotations} />
                <div style={{ padding: '10px' }}>Delete</div>
            </EditorButtonPopover>

            <Divider style={{ width: '100%', backgroundColor: theme.secondaryForeground }} />

            <EditorButtonPopover disabled={activeAnnotations.length === 0}>
                <RadiusSlider activeAnnotations={activeAnnotations} />
                <div style={{ padding: '10px' }}>Set Radius</div>
            </EditorButtonPopover>

            <EditorButtonPopover disabled={activeAnnotations.length === 0}>
                <CellTypePicker activeAnnotations={activeAnnotations} />
                <div style={{ padding: '10px' }}>Set Cell Type</div>
            </EditorButtonPopover>

            <EditorButtonPopover>
                <GridButton onClick={toggleGrid} />
                <div style={{ padding: '10px' }}>Toggle Grid</div>
            </EditorButtonPopover>
        </div>
    );
};
