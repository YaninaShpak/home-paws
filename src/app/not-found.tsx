import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="container">
      <p>
        Страница не найдена
      </p>
      <Link href='/'>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
