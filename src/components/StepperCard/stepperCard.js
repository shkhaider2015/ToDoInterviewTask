import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Steppers } from '../Stepper/stepper'



export const StepperCard = ({title}) => {
        return <Paper style={{ marginTop : '5%', paddingBottom : '2%' }} >
            <div style={{ display : 'flex', flexDirection : 'row', justifyContent : 'center', paddingTop : '5%', marginBottom : '5%' }} >
            <Typography variant="h5" > {title} </Typography>
            </div>
            <Steppers />
        </Paper>
}