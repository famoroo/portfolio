"use client";

import dynamic from "next/dynamic";

const BookViewerPdf = dynamic(
    () => import("./BookViewerPdf"),
    {
        ssr: false,
        loading: () => null,
    }
);

type Props = {
    title?: string;
    file: string;
    initialPage?: number;
};

export default function BookViewerPdfClient(props: Props) {
    return <BookViewerPdf {...props} />;
}
