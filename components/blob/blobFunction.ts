import { put, PutBlobResult } from '@vercel/blob';

export const uploadBlob = async (file: File): Promise<PutBlobResult> => {
    const blob = await put(file.name, file, {
        access: 'public',
        addRandomSuffix: true,
    });

    return blob;
}