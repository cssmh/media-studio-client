import { FallingLines } from 'react-loader-spinner';

const SmallLoader = () => {
    return (
      <div className="flex justify-center">
        <FallingLines
          color="#9C27B0"
          width="60"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
};

export default SmallLoader;