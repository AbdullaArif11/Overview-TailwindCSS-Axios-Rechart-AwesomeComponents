import PropTypes from 'prop-types';

const Options = ({option}) => {
  console.log(option);
  
  return (
    <div className="border-2 m-3">
      <h2 className="text-3xl text-black bg-white">{option.name} price: {option.price}</h2>
      {
        option.features.map(feature => <p>{feature}</p>)
      }
    </div>
  );
};

Options.propTypes = {
  option: PropTypes.object
};

export default Options;