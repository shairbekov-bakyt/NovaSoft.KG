import React from 'react';
import './roadmapItem.scss'

const RoadmapItem = (props) => {
    const {image, title, description, index} = props
    return (
        <div className={'roadmapItem'}>
            <div className="roadmap__header">
                <div className="index">
                    {index}
                </div>
                <div className={'title'}>
                    <h2>
                        {title}
                    </h2>
                </div>
            </div>
            <div className={'roadmap__body'}>
                <p>
                    {description}
                </p>
                <img src={image} alt={'analise'}/>
            </div>
        </div>
    );
};

export default RoadmapItem;