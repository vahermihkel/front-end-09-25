
function Card({children}) {
  return (
    <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white">
        <img src="" alt="" />
        {children}
        <button>Nupp</button>
    </div>
  )
}

export default Card