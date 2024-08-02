function DetailCard() {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    I
                </div>
                <h2 className="text-xl font-bold">Card Title</h2>
            </div>
            <p className="text-gray-700">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Aenean leo eget montes viverra platea tristique. Fames porta scelerisque.
            </p>
        </div>
    </div>
  )
}

export default DetailCard