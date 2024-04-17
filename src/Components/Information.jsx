/* eslint-disable react/prop-types */

const Information = (props) => {
  return (
    <div className=" mt-3  mb-6">
      <div className=" leading-7">
        <h3 className="nunito text-xl mb-3 text-red-500/45 font-bold">{props.title}</h3>
        <p className="text-zinc-400 text-sm leading-6 nunito w-[500px]">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Information;
