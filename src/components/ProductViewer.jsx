import '../App.css'
import ThreeSixty from "react-360-view";

const ProductViewer = () => {
    const basePath = "src/assets";
  return (
    <div className="app">
            <ThreeSixty
                amount={36}
                imagePath={basePath}
                fileName={`img{index}.jpg`}
            // spinReverse
            />
        </div>
  )
}

export default ProductViewer