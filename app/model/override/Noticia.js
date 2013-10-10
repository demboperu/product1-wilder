Ext.define('ElComercio.model.override.Noticia', {
    override: 'ElComercio.model.Noticia',
    
    fields: [
    	{name: 'idNoticia', type: 'int'},
        {name: 'titulo', type: 'string'},
        {name: 'desripcion', type: 'string'},
        {name: 'detalle', type: 'string'},
        {name: 'imagen', type: 'string'},
        {name: 'tipo', type: 'int'}
    ]
    
});