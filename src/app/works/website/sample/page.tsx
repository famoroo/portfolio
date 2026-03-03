
import BookViewerPdfClient from "@/components/features/works/BookViewerPdfClient";
// import BookViewer from "@/components/features/works/BookViewer";

// const pages = [
//     "/images/sample/website/sample/1.png",
//     "/images/sample/website/sample/2.png",
//     "/images/sample/website/sample/3.png",
//     "/images/sample/website/sample/4.png",
//     "/images/sample/website/sample/5.png",
// ];

export default async function PageForWorks() {
    return (
        <BookViewerPdfClient
            file="/images/sample/website/sample/sample.pdf"
            />
        // <BookViewer
        //     pages={pages}
        //     initialPage={2}
        //     />
    );
}
