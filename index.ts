import { state } from './state';

class Base {

}

class Collection extends Base {
	private _fields: Field[];
	private _records: Record[];
}

class Field extends Base {
	private _collection: Collection;
	private _index: number;
}

class Record extends Base {
	private _collection: Collection;
	private _data: any;
	private _index: number;
	private _values: Value[];
}

class Value extends Base {
	private _data: any;
	private _display: string;
	private _field: Field;
	private _record: Record;
}

// Selections

class Selection {

}

class CollectionSelection extends Selection {
	private _collections: Collection[];
}

class RecordSelection extends Selection {
	private _records: [];
}

class FieldSelection extends Selection {
	private _fields: Field[];
}

class ValueSelection extends Selection {
	private _values: Value[];
}
