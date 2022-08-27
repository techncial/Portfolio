import React from 'react'
import "../Assets/Project.css";
import DevicesIcon from '@material-ui/icons/Devices';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';

export default function ProjectWork() {
  return (
    <>
    

        <section className="Project_work" id='Work'>

            <div className="heading_project All_head">
            <DevicesIcon fontSize="large"/>
                <h1>
                    Project 
                <span className='special_font'>
                     Made

                </span>
                </h1>
            </div>

            <div className="project_content">
                <div className="project_img">

                
                <div className="project_items">
                    <div className="heading">

                    <h3>PortFolio Website</h3>
                    </div>
                    <div className="project_btnout">
                        
                    <div className="project_btn">
                        <button>View</button>
                        <button>Code</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="view_btn">
                <button className='btn-primary'>View All <RemoveRedEyeOutlinedIcon/> </button>
            </div>

        </section>
    
    
    
    </>
  )
}
