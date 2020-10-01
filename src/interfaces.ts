/* eslint-disable */

export interface DataBeginInterface {
  readonly id?: number;
  readonly count: number;
}

export interface AllDataConfiguration extends DataBeginInterface {
  name: string;
  descriptoon: string;
  type: string;
  level: number;
  rarity: string;
  vendor_value: number;
  game_types: string[];
  flags: string[];
  restrictions: [];
  chat_link: string;
  detalis?: Detalis[];
  icon?: string
}


export interface Detalis {
  type: string;
  damage_type: string;
  min_power: number;
  max_power: number;
  defense: number;
  attribute_adjustment: number;
  secondary_suffix_item_id?: string;
  state_choices: number[];
}

export interface ArrayDataBeginConfig {
  data: DataBeginInterface[]
}

export interface ArrayDataAllConfig {
  data: AllDataConfiguration[]
}


export interface DataProps extends ArrayDataAllConfig {
  genId: () => void | string
}