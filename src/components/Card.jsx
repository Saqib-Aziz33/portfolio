import CardBadge from "./CardBadge";

// const orderOne = {
//     order: 1
// }
// const orderTwo = {
//     order: 2
// }

function Card({link, src, title, desc, lang, i}) {
    
    return <div>
        <div className="card md:card-side my-4 ">
            <figure className={i%2!==0 ? 'md:order-2': ''}>
                <img src={src}  data-aos="flip-up" alt={title + ' image'} />
            </figure>
            <div className="card-body" data-aos="zoom-in">
                <h2 className="card-title">{title}
                <br />
                    {lang.map((item, index) => (
                        <CardBadge key={index} lang={item} />
                    ))}
                </h2>
                <p>{desc}</p>
                <div className="card-actions">
                    <a className={i%2===0 ? "btn btn-primary": "btn btn-ghost"} target='_blank' rel="noreferrer" href={link}>Visit</a>
                </div>
            </div>
        </div>

    </div>;
}

export default Card;
