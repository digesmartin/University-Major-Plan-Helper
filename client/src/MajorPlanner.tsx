import React from 'react';
import { useEffect } from 'react';
import { obtainJSON } from './obtain_reqs';

export interface MajorPlannerProps 
{
    filepath: string;
}

export function MajorPlanner(props: MajorPlannerProps)
{
    useEffect(()=>
    {
        //obtain info from json major file
        //because the dependencies are empty, this will only happen once
        
        //obtainJSON();
        //End of copied code

        // let dataFile = require(props.filepath);
        // console.log(dataFile);
    }, []);

    return(
        <div>
            Peepo
        </div>
    );
};

//function parseJSON