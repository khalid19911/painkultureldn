import placeholderImage from "../assets/images/pain_kulture_shirt_white.jpg";

function Card() {
  return (
    <>
      <div className="bg-white w-64 h-100 border rounded-sm transition duration-400 ease-in-out hover:scale-105 hover:shadow-xl hover:border-blue-400 ">
        <div className="p-6">
          <img src={placeholderImage}></img>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <h3 className="text-black">PainKultureShirt</h3>
          <p className="text-gray-500 italic">White</p>
          <p className="text-black">$32.31</p>
        </div>
      </div>
    </>
  );
}

export default Card;
