import { AiFillHtml5 as Html } from 'react-icons/ai';
import { IoLogoCss3 as Css } from 'react-icons/io';
import { SiJavascript as Javascript } from 'react-icons/si';
import { GrReactjs as React } from 'react-icons/gr';
import { FaNodeJs as Node } from 'react-icons/fa';
import { SiExpress as Express } from 'react-icons/si';
import { SiMongodb as Mongo } from 'react-icons/si';

function CardBadge({ lang }) {
  return <div className="badge mx-1 mt-4">
    {lang === 'html' && <Html color='tomato' />}
    {lang === 'css' && <Css color='#0077b6' />}
    {lang === 'js' && <Javascript color='#e9c46a' />}
    {lang === 'react' && <React color='#00b4d8' />}
    {lang === 'node' && <Node color='green' />}
    {lang === 'express' && <Express color='black' />}
    {lang === 'mongodb' && <Mongo color='green' />}

  </div>;
}

export default CardBadge;
