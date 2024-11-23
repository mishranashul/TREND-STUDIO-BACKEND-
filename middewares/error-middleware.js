const errorMiddleWare = (err, req, res, next) => {
const status = err.status || 500;
const message= err.message || "backend error";
const additional = err.additional || "error from backend";

return res.status(status).json({message,additional});
};

module.exports = errorMiddleWare;