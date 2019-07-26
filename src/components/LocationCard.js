import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard(props) {
  // image={image}  
  //{ name, type, dimension, residents }

  return (
    <div className="card">
      <Card>
        <Card.Content header={props.data.name} />
        <Card.Content description={props.data.type} />
        <Card.Content extra>
          <Icon name='user' />
          {props.data.residents.length}
        </Card.Content>
      </Card>
    </div>
  )
}
