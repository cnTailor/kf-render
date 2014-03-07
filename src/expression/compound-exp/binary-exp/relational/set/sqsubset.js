/**
 * "⊏"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SqsubsetOperator = require( "operator/binary-opr/relational/set/sqsubset" );

    return kity.createClass( 'SqsubsetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SqsubsetOperator() );

        }

    } );

} );
