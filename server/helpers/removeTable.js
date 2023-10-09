module.exports = removeTable = async (Table, productId, userId) => {
    return await Table.findOne({
        where: { productId, userId }
    })
        .then(result => {
            return Table.destroy({
                where: { productId, userId }
            })
                .then(() => { return result })
        })
}