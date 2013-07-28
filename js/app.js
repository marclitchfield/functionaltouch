function ModuleController($scope) {
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
									infix: true,
									expressions: [
										{ type: 'ref', name: 'n' },
										{ type: 'literal', value: 1 }
									]
								},
								{ type: 'literal', value: 1 },
								{
									type: 'call',
									func: '*',
									infix: true,
									expressions: [
										{ type: 'ref', name: 'n' },
										{
											type: 'call',
											func: 'fac',
											expressions: [
												{
													type: 'call',
													func: '-',
													infix: true,
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
				}
			]
		},
		{
			name: 'module B',
			functions: []
		}
	];
}

function FunctionController($scope) {
}