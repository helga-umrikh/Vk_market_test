import React from 'react'
import { Div, ButtonGroup, IconButton, Image, RichCell } from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { Icon16Add, Icon16Minus, Icon20DeleteOutline } from '@vkontakte/icons'
import { Item as IItem } from '../models/Item'

type ItemProps = {
    item: IItem
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <div>
            <RichCell
                before={<Image src={item.image} />}
                text={`${item.description}`}
                caption={`В наличии:\u00A0${item.rating.count}`}
                after={`${item.price}\u00A0€`}
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
                {item.title}
            </RichCell>
        </div>
    )
}

export default Item
