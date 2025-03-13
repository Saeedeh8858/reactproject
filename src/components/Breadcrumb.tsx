import { Link } from "react-router-dom";

interface BreadcrumbProps {
    pageName: string;
  }
  
  export const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName }) => {
    return (
        <div className="transparentBg2 py-md-3 py-1">
        <div className="container">
            <div className="d-flex items-center">
                <div className="breadcrumb style-15-lh35-n">
                    <Link to="/" className="px-1">Home</Link> /
                    <Link to="#" className="style-15-lh35-n --gray80 px-1">{pageName}</Link>
                </div>
                <h1 className="style-28 flex-fill text-center pageTitle">{pageName}</h1>
            </div>
        </div>
    </div>
    );
}