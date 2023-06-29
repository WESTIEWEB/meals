const Meals = () => {
  return (
    <center className='bg-blue-500 mx-auto grid grid-cols-1 gap-2 items-center w-screen box-border h-80'>
      <ul className="w-9/12 place-self-center grid justify-evenly grid-cols-2 gap-2 h-4/6 sm:grid-cols-1 sm:w-10/12">
        <li className="bg-white rounded-lg shadow-lg mb-2 sm:w-11/12">
            <div className="px-4 py-2">
                <h2 className="font-bold text-2xl text-gray-800">Meal 1</h2>
                <p className="sm:text-sm text-xs text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
            </div>
        </li>
        <li className="bg-white rounded-lg shadow-lg mb-2 sm:w-11/12">
            <div className="px-4 py-2">
                <h2 className="font-bold text-2xl text-gray-800">Meal 2</h2>
                <p className="sm:text-sm text-xs text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
            </div>
        </li>
      </ul>
    </center>
  )
}

export default Meals
