import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'
const Videos = ({videos, direction}) => {

  if(!videos?.length) return <Loader/>;
    
  return (
    <Stack direction={direction || "row"}flexWrap="wrap" gap={2} justifyContent="start">
        {videos.map((video, id) => (
            <Box key={id}>
                {video.id.videoId && <VideoCard video = {video}/>}
                {video.id.channelId && <ChannelCard channelDetail = {video}/>}
                {/* snippet */}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos