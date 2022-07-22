import {Link} from 'react-router-dom'

function MoreCard({link}) {
    return <div className="card self-center" data-aos='zoom-in'>
        <div className="card-body">
            <h2 className="card-title">
                <Link to={link} className="btn btn-block btn-lg">More</Link>
            </h2>
        </div>
    </div>;
}

export default MoreCard;
