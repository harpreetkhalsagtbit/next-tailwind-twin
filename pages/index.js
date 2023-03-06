import React from 'react'
import tw, { styled } from 'twin.macro'

import Button from 'commons/Button'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-red-100`,
  ],
}

const StyledH1 = styled.h1([
  tw`
    text-lg text-green-400
  `
])

const IndexPage = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5 ">
      <StyledH1>hey</StyledH1>
    </div>
    <Button>hey</Button>
  </div>
)

export default IndexPage