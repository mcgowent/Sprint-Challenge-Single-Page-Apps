import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.data.species}{" "}{props.data.status}</span>
        </Card.Meta>
        <Card.Description>
          Location: {props.data.location.name}<br />
          Origin: {props.data.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes
      </a>
      </Card.Content>
    </Card>
  )
}
