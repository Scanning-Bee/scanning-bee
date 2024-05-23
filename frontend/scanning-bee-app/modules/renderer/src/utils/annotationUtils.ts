import { UUID } from 'crypto';
import { IconName } from '@blueprintjs/core';
import { CellContentDto } from '@frontend/controllers/backendInterface/payloadTypes';
import Annotation from '@frontend/models/annotation';
import StorageService from '@frontend/services/StorageService';
import { ManualAnnotatorMode } from '@frontend/slices/annotationSlice';

export const getIconForMode = (mode: ManualAnnotatorMode): IconName => {
    switch (mode) {
    case 'default':
        return 'edit';
    case 'brush':
        return 'highlight';
    case 'add':
        return 'add';
    case 'delete':
        return 'delete';
    default:
        return 'blank';
    }
};

export const findAnnotationWithCoords = (annotations: Annotation[], x: number, y: number): UUID | undefined => {
    let annotationId: UUID | undefined;

    annotations.forEach((annotation) => {
        const centerX = annotation.center[0] / 2;
        const centerY = annotation.center[1] / 2;
        const radius = annotation.radius / 2;

        // if the click is within the annotation
        if (
            x >= centerX - radius
            && x <= centerX + radius
            && y >= centerY - radius
            && y <= centerY + radius
        ) {
            annotationId = annotation.id;
        }
    });

    return annotationId;
};

export const focusOnImageButton = (image: string) => {
    const buttonElem = document.getElementById(`image-button-${image}`);

    if (buttonElem) {
        buttonElem.focus({
            preventScroll: false,
        });
    }
};

export const getRecentlyOpenedFolders = (n?: number): string[] => {
    const recentlyOpenedFolders = StorageService.getStorage('recentlyOpenedFolders');

    if (!recentlyOpenedFolders) {
        return [];
    }

    return Object.keys(recentlyOpenedFolders)
        .sort((a, b) => new Date(recentlyOpenedFolders[b]).getTime() - new Date(recentlyOpenedFolders[a]).getTime())
        .slice(0, n || 5);
};

export const sortCellContentsByTimestamp = (contents: CellContentDto[]): CellContentDto[] => contents
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

export const getCellContentsBetween = (contents: CellContentDto[], start: Date, end: Date): CellContentDto[] => {
    if (!start || !end) return contents;

    return contents
        .filter(annotation => new Date(annotation.timestamp) >= start && new Date(annotation.timestamp) <= end);
};
