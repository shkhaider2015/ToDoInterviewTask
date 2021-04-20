import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Steppers } from '../Stepper/stepper'



export const StepperCard = ({title}) => {
        return <Paper>
            <Typography> {title} </Typography>
            <Steppers />
        </Paper>
}