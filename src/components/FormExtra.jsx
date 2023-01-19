import {Link} from 'react-router-dom';
export default function FormExtra(){
    return(
        <div className="flex items-center justify-between ">
        <div className="flex items-center">
        </div>

        <div className="text-sm">
          <Link to={'/reset'} className="font-medium text-[#04fd8c] underline">
            שכחת סיסמה?
          </Link>
        </div>
      </div>

    )
}