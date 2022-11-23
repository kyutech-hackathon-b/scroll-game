export const Loading = () => {
  return (
    <div className="h-[calc(100vh-70px)] w-full relative bg-black">
      <div className="spinner-box">
        <div className="blue-orbit leo"></div>

        <div className="green-orbit leo"></div>

        <div className="red-orbit leo"></div>

        <div className="white-orbit w1 leo"></div>
        <div className="white-orbit w2 leo"></div>
        <div className="white-orbit w3 leo"></div>
      </div>
    </div>
  );
};
