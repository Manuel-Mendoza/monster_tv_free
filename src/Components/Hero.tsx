import local from '../Context/local.json';

export default function Hero() {
  return (
    <div className="p-base py-6">
      <div className="carousel w-full  rounded-3xl">
        {local.map(data => (
          <div id={data.id} className="carousel-item relative w-full">
            <img
              src={data.img}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={data.href_left} className="btn btn-circle">❮</a>
              <a href={data.href_right} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}