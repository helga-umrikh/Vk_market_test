import React from 'react'
import { Div, ButtonGroup, IconButton, Image, RichCell } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { Icon16Add, Icon16Minus, Icon20DeleteOutline } from '@vkontakte/icons'

const Item = () => {
  return (
    <div>
            <RichCell
                before={<Image />}
                text="описание"
                caption="В наличии:\u00A0"
                after="\u00A0€`"
                actions={
                    <Div style={{ display: 'flex', alignItems: 'center' }}>
                        <ButtonGroup
                            mode="horizontal"
                            style={{ marginRight: '48px' }}
                        >
                            <IconButton>
                                <Icon16Minus width={16} height={16} />
                            </IconButton>
                            <Div>1</Div>
                            <IconButton>
                                <Icon16Add width={16} height={16} />
                            </IconButton>
                        </ButtonGroup>
                        <IconButton>
                            <Icon20DeleteOutline></Icon20DeleteOutline>
                        </IconButton>
                    </Div>
                }
            >
                название
            </RichCell>
        </div>
  )
}

export default Item