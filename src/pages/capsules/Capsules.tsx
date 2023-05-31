import { motion } from 'framer-motion'
import logo from "../../assets/img/logo.svg";

function Capsules() {
  return (
    <motion.div
      className="flex-col"
      key="capsules"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >
      <span className='page-title'>CAPULES</span>
      <div className="logo-bottom">
        <img src={logo} alt="small-logo" />
      </div>
    </motion.div>
  )
}

export default Capsules