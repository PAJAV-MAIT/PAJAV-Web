import Dialog from "./Dialog";

// item: { image, alt, title, note?, original? }
export default function Lightbox({ item, onClose }) {
  return (
    <Dialog open={!!item} onClose={onClose} label={item?.title || "Image"} className="lightbox">
      {item && (
        <figure>
          <img src={item.original || item.image} alt={item.alt} />
          <figcaption>
            <strong>{item.title}</strong>
            {item.note}{" "}
            {item.original && (
              <a href={item.original} download>
                Download original
              </a>
            )}
          </figcaption>
        </figure>
      )}
    </Dialog>
  );
}
