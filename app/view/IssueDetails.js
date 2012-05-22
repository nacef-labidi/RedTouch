Ext.define('Redtouch.view.IssueDetails', {
    extend: 'Ext.Panel',
    xtype: 'issuedetails',

    config: {
        styleHtmlContent: true,
        tpl :[
			'<p>#{id} {tracker}</p>',
			'<p>{updated_on}</p>',
            '<h2>{subject}</h2>',
			'<p>{description}</p>',
			'<p>{done_ratio}%</p>',
			'<p>{status}</p>',
			'<p>{priority}</p>',
			'<p>{assigned_to}</p>',
			'<p>{project}</p>',
			'<p>{start_date}</p>',
			'<p>{due_date}</p>',
			'<p>{fixed_version}</p>'
        ]
    }
});
