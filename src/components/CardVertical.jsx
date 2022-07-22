
function CardVertical(props) {

    return <div>
    <div className="card text-center shadow-lg" data-aos='zoom-in'>
        <figure className="px-10 pt-10">
            <img src={props.img} className="rounded-xl" alt={props.alt} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.desc}</p>
            <div className="justify-center card-actions">
                <a href={props.link} target='_blank' rel='noreferrer' className="btn btn-ghost">Visit</a>
            </div>
        </div>
    </div>
</div>;
}

export default CardVertical;
