import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-600 min-h-[800px]">
      <div className="text-center">
        <span className="py-1 px-2 rounded-full h-6 text-sm font-medium uppercase bg-neutral-900 text-orange-600">
          Features
        </span>
        <h2 className="text-3l sm:text-5xl lg:text-6xl relative mt-20 tracking-tight">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-900 inline-block text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, idx) => (
          <div key={idx} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5>{feature.text}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
