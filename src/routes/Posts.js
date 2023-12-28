import { Outlet } from 'react-router-dom'

export const Posts = () => {
  return (
    <div>
      <h2>Postsのページ</h2>
      <Outlet />
    </div>
  );
}
