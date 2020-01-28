declare namespace Coffeetable {
  interface Base {

  }

  interface Collection extends Base {
    _fields: Field[];
    _records: Record[];
  }

  interface Field extends Base {
    _collection: Collection;
    _index: number;
  }

  interface Record extends Base {
    _collection: Collection;
    _data: any;
    _index: number;
    _values: Value[];
  }

  interface Value extends Base {
    _data: any;
    _display: string;
    _field: Field;
    _record: Record;
  }

  interface Selection {

  }

  interface CollectionSelection extends Selection {
    _collections: Collection[];
  }

  interface RecordSelection extends Selection {
    _records: [];
  }

  interface FieldSelection extends Selection {
    _fields: Field[];
  }

  interface ValueSelection extends Selection {
    _values: Value[];
  }
}
