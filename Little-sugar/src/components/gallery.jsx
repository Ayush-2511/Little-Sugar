import "./gallery.css";
function Gallery() {
    const images = [
        "/gallery/gallery-1.webp",
        "/gallery/gallery-2.webp",
        "/gallery/gallery-3.webp",
        "/gallery/gallery-4.webp"
    ];
    return (
        <section id="gallery" className="gallery" >
            <div className="gallery-track">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
                ))}
                {/* Duplicate images for seamless scrolling */}
                {images.map((src, index) => (
                    <img key={`duplicate-${index}`} src={src} alt={`Gallery Image ${index + 1}`} />
                ))}
            </div>
        </section>
    );
}
export default Gallery;