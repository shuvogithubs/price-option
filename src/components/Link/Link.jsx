
import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    return (
        <li className="mr-10 hover:animate-ping  hover:bg-teal-100 rounded-2xl text-center ">
        <a  href={route.path}>{route.name}</a> 
        </li>

    );
};

Link.propTypes ={
    route:PropTypes.object
}

export default Link;