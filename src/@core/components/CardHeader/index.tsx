import { Stack, Typography } from '@mui/material'
import { FunctionComponent } from 'react'

interface CardHeaderProps {}

const CardHeader: FunctionComponent<CardHeaderProps> = () => {
  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'center'}
        sx={{
          p: 4,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Typography>Lorem, ipsum dolor.</Typography>
      </Stack>
    </>
  )
}

export default CardHeader
