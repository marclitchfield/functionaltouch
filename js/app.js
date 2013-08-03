var App = angular.module('functionaltouch', ['ngDragDrop']);

App.controller('ModuleController', function($scope) {
	$scope.modules = [
		{
			name: 'module A',
			functions: [
				{
					name: 'fac',
					arguments: [ { name: 'n' } ],
					expressions: [
						{
							type: 'call',
							func: 'if',
							expressions: [
								{
									type: 'call',
									func: '<',
									expressions: [
										{ type: 'ref', name: 'n' },
										{ type: 'literal', value: 1 }
									]
								},
								{ type: 'literal', value: 1 },
								{
									type: 'call',
									func: '*',
									expressions: [
										{ type: 'ref', name: 'n' },
										{
											type: 'call',
											func: 'fac',
											expressions: [
												{
													type: 'call',
													func: '-',
													expressions: [
														{ type: 'ref', name: 'n' },
														{ type: 'literal', value: 1 }
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					name: 'combinations',
					arguments: [ { name: 'N' }, { name: 'k' } ],
					expressions: [
						{
							type: 'call',
							func: '/',
							expressions: [
								{
									type: 'call',
									func: 'fac',
									expressions: [ { type: 'ref', name: 'N' }
									]
								},
								{
									type: 'call',
									func: '*',
									expressions: [
										{
											type: 'call',
											func: 'fac',
											expressions: [ { type: 'ref', name: 'k' } ]
										},
										{
											type: 'call',
											func: 'fac',
											expressions: [
												{
													type: 'call',
													func: '-',
													expressions: [
														{ type: 'ref', name: 'N' },
														{ type: 'ref', name: 'k' }
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					name: 'binomial',
					arguments: [
						{ name: 'N' },
						{ name: 'p' },
						{ name: 'k' }
					],
					expressions: [
						{
							type: 'call',
							func: '*',
							expressions: [
								{
									type: 'call',
									func: 'combinations',
									expressions: [
										{ type: 'ref', name: 'N' },
										{ type: 'ref', name: 'k' }
									]
								},
								{
									type: 'call',
									module: 'math',
									func: 'pow',
									expressions: [
										{ type: 'ref', name: 'p' },
										{ type: 'ref', name: 'k' }
									]
								},
								{
									type: 'call',
									module: 'math',
									func: 'pow',
									expressions: [
										{
											type: 'call',
											func: '-',
											expressions: [
												{ type: 'literal', value: 1 },
												{ type: 'ref', name: 'p' }
											]
										},
										{
											type: 'call',
											func: '-',
											expressions: [
												{ type: 'ref', name: 'N' },
												{ type: 'ref', name: 'k' }
											]
										}
									]
								}
							]
						}
					]
				},
				{
					name: 'hypergeometric',
					arguments: [
						{ name: 'N' },
						{ name: 'S' },
						{ name: 'n' },
						{ name: 'k' }
					],
					expressions: [
						{
							type: 'call',
							func: '*',
							expressions: [
								{
									type: 'call',
									func: 'combinations',
									expressions: [
										{ type: 'ref', name: 'S' },
										{ type: 'ref', name: 'k' }
									]
								},
								{
									type: 'call',
									func: '/',
									expressions: [
										{
											type: 'call',
											func: 'combinations',
											expressions: [
												{
													type: 'call',
													func: '-',
													expressions: [
														{ type: 'ref', name: 'N' },
														{ type: 'ref', name: 'S' }
													]
												},
												{
													type: 'call',
													func: '-',
													expressions: [
														{ type: 'ref', name: 'n' },
														{ type: 'ref', name: 'k' }
													]
												}
											]
										},
										{
											type: 'call',
											func: 'combinations',
											expressions: [
												{ type: 'ref', name: 'N' },
												{ type: 'ref', name: 'n' }
											]
										}
									]
								}


							]
						}
					]
				}

			]
		},
		{
			name: 'module B',
			functions: []
		}
	];
});