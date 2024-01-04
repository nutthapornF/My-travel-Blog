const paginate = (followers) => {
  //make arr into small 10s data per arr
  const itemsPerPage = 6;
  const pages = Math.ceil(followers.length / itemsPerPage);
  //create new Arr with( Pages) items
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage); //turning arr to arr of arr
  });
  return newFollowers;
};

export default paginate;
