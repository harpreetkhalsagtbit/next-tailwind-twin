import React from 'react'
import tw, { styled } from 'twin.macro'

import Button from '../src/Button'
import Dropdown from '../src/Dropdown'

const adpushupDropdownDataFormat = [
	{
		display_name: 'Daily',
		name: 'Daily',
		position: 1,
		value: 'daily',
	},
	{
		display_name: 'Monthly',
		name: 'Monthly',
		position: 2,
		value: 'monthly',
	},
	{
		display_name: 'Cumulative Disabled',
		isDisabled: true,
		name: 'Cumulative',
		position: 3,
		value: 'cumulative',
	},
	{
		display_name: 'Cumulative',
		name: 'Cumulative',
		position: 4,
		value: 'cumulative',
	},
];

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
    <Button secondary>hey</Button>
    <Dropdown options={adpushupDropdownDataFormat} placeHolder="All" />

  </div>
)

export default IndexPage